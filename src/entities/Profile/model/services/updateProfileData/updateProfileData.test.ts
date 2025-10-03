import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../types/profile";


describe('updateProfileData.test', ()=> {
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
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    })
    test('error', async ()=> {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));

        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ]) 
        
    })
    test('validate error', async ()=> {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, lastname: ''},
            }
        });

        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ]) 
        
    })

})