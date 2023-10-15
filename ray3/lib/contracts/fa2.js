const get_balance = async (Tezos, fa2_contract_address, userAddress, token_id=0) => {
    // creates contract instance
    const contract = await Tezos.wallet.at(fa2_contract_address);
    const storage = await contract.storage();
    const balance = await storage.ledger.get([userAddress, token_id]);
    return balance;
}

const get_balance_user_friendly = async (Tezos, fa2_contract_address, userAddress, token_id=0) => {
    const balance = await get_balance(Tezos, fa2_contract_address, userAddress, token_id);
    return balance.c[0];
}


export {
    get_balance,
    get_balance_user_friendly
}
