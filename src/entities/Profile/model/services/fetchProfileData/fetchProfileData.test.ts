import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

describe('fetchProfileData.test', ()=> {
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
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data: data}));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    })
    test('error', async ()=> {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected')
        
    })

})