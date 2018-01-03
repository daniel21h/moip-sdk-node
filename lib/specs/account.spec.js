import auth from './config/auth';
import moip from '../index';
import chai from 'chai';

chai.should();
chai.use(require('chai-json-schema'));
moip.initAuthorization(auth);


describe('Account', function () {
    it('Should successfully create an account', function (done) {
        moip.account.create({
            bankNumber: "237",
            agencyNumber: "12345",
            agencyCheckNumber: "0",
            accountNumber: "12345678",
            accountCheckNumber: "7",
            type: "CHECKING",
            holder: {
                taxDocument: {
                    type: "CPF",
                    number: "622.134.533-22"
                },
                fullname: "Demo Moip"
            }
        })
        .then((response) => {
            console.log('success');
            // console.log(response)
        }).catch((err) => {
            console.log('err');
        });
    });
});