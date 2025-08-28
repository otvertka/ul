import { County, Currency } from "shared/const/common";

export interface Profile {
    first: string,
    lastname: string,
    age: 42,
    currency: Currency,
    country: County,
    city: string,
    username: string,
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}