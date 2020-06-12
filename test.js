const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

chai.use(chaiHttp);
chai.should();

describe("Hello World", () => {
    describe("GET /helloworld", () => {
        it("should return hello world string", (done) => {
            chai.request(app)
                .get('/helloworld')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.equal('Hello World!');
                    done();
                });
         });
    });    
});