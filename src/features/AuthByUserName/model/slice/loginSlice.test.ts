import { LoginSchema } from "../types/loginSchema"
import { loginActions, loginReducer } from "./loginSlice";

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {username: '123'};
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123213'))).toEqual({username:'123213'});
    })
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {password: '123321'};
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123321'))).toEqual({password:'123321'});
    })
})