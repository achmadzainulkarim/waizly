export interface AddressGetDetail {
    userId: number;
    addressId: number;
}

export interface AddressCreate {
    village : string;
    district : string;
    city : string;
    province : string;
    userId : number;
}

export interface AddressUpdate {
    id : number;
    userId : number;
    village : string;
    district : string;
    city : string;
    province : string;
}

export interface AddressDelete {
    addressId : number;
    userId : number;
}