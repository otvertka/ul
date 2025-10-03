import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../types/profile";

describe('validateProfileData.test', ()=> {
    const data = {
        username: 'admin',
        age: 38,
        country: Country.Ukraine,
        lastname: 'jk',
        first: 'evg',
        city: 'Odesa',
        currency: Currency.USD,
    }
    test('success', async ()=> {
        const result = validateProfileData(data);
        expect(result).toEqual([]);

    });
    test('without first and last name', async ()=> {
        const result = validateProfileData({...data, first: '', lastname: ''});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ]); 
    });
    test('incorrect age', async ()=> {
        const result = validateProfileData({...data, age: undefined});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ]); 
    });
    test('incorrect country', async ()=> {
        const result = validateProfileData({...data, country: undefined});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY
        ]); 
    });
    test('incorrect all', async ()=> {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]); 
    });
    

})