var should = require('should');
var supertest = require('supertest');
var server =supertest.agent('http://localhost:3000');

describe('file upload test case', function(){
    it('should upload file', function (done){
        server
        .post('/api/photo')
        .field('filename', 'userPhoto')
        .attach('file','test/as.png')
        .expect(200)
        .end( function (err,res){
            res.status.should.equal(200);
            done();
        })
    })
})

