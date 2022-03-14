import 'dotenv/config';
import App from './app';

const { PORT, ATLAS_URI: URI } = process.env;

if (PORT && URI) {
    const app = new App(Number(PORT), URI);
    app.listen();
} else {
    console.log(`PORT=${PORT}, URI=${URI}`);
}
