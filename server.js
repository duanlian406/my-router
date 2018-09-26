const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
app.get("/getHeroList", (req, res) => {
    res.json(HEROES);
});
app.post("/updateHero", (req, res) => {
    let hero = req.body;
    if (HEROES.some(item => item.id === +hero.id)) {
        HEROES.find(item => item.id === +hero.id).name = hero.name;
        res.json({ state: 'updateHero complete' });
    } else {
        res.json({ state: `Hero ${JSON.stringify(hero)} is not find` });
    }
});
app.post("/updateList", (req, res) => {
    let { type, data } = req.body;
    switch (type) {
        case 'update':
            if (HEROES.some(item => item.id === +data.id)) {
                HEROES.find(item => item.id === +data.id).name = data.name;
                res.json({ state: 0, msg: 'updateHero complete' });
            } else {
                res.json({ state: 1, msg: `Hero ${JSON.stringify(data)} is not found` });
            }
            break;
        case 'add':
            if (HEROES.some(item => item.id === +data.id)) {
                res.json({ state: 1, msg: `Hero already exist` });
            } else {
                HEROES.push(data);
                res.json({ state: 0, msg: 'add hero complete' });
            }
            break;
        case 'delete':
            let index = HEROES.findIndex(item=>item.id === +data.id);
            if (~index) {
                HEROES.splice(index,1);
                res.json({ state: 0, msg: `Hero already delete` });
            } else {
                res.json({ state: 1, msg: 'Hero is not found' });
            }
            break;
        default:
            break;
    }

});
app.listen(8888, "localhost", () => console.log("服务已经启动"))
