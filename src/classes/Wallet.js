import elliptic from '../modules/elliptic';
import genHash from '../modules/genHash';

const INITIAL_BALANCE = 100;

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE;
        this.keyPair = elliptic.createKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString() {
        const { balance, publicKey } = this;

        return `Wallet - 
        publicKey:  ${publicKey.toString()}
        balance:    ${balance}`;
    }

    sign(data) {
        return this.keyPair.sign(genHash(data));
    }
}

export { INITIAL_BALANCE };
export default Wallet;