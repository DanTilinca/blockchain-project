module ibt::IBT {
    use std::signer;

    struct Token has key, store {
        total_supply: u64,
        owner: address,
    }

    public fun initialize(owner: address): Token {
        Token { total_supply: 0, owner }
    }

    public fun mint(owner: &mut Token, to: address, amount: u64) {
        assert!(owner.owner == signer::address_of(&signer), "Unauthorized");
        owner.total_supply = owner.total_supply + amount;
    }

    public fun burn(owner: &mut Token, from: address, amount: u64) {
        assert!(owner.owner == signer::address_of(&signer), "Unauthorized");
        owner.total_supply = owner.total_supply - amount;
    }
}
