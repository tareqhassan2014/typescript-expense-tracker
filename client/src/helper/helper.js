import _ from 'lodash';
import { ILabels } from '../app/services/apiSlice';

export const getSum = (transaction: ILabels[], type?: string) => {
    return _(transaction)
        .groupBy('type')
        .map((obj, key) => {
            if (!type) return _.sumBy(obj, 'amount');
            return {
                type: key,
                color: obj[0].color,
                total: _.sumBy(obj, 'amount'),
            };
        })
        .value();
};

export const getLabels = (transactions: ILabels[]) => {
    const amountSum = getSum(transactions, 'type');
    const total = _.sum(getSum(transactions));

    return _(amountSum)
        .map((obj) => _.assign(obj, { percent: (100 * obj.total) / total }))
        .value();
};

export const chartData = (transactions: ILabels[]) => {
    let bg = _.map(transactions, (a) => a.color);
    bg = _.uniq(bg);

    if (bg.length === 0) {
        bg = ['red'];
    }

    let data = getSum(transactions);

    if (getSum(transactions).length === 0) {
        data = [100];
    }

    return {
        data: {
            datasets: [
                {
                    data,
                    backgroundColor: bg,
                    hoverOffset: 4,
                    borderRadius: 30,
                    spacing: 10,
                },
            ],
        },
        options: {
            cutout: 115,
        },
    };
};

export const getTotal = (transactions: ILabels[]) => {
    return _.sum(getSum(transactions));
};
