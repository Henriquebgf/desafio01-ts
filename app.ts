import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import {FakeAccount} from './class/FakeAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)

peopleAccount.deposit(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
console.log(companyAccount)

const fakeAccount: FakeAccount = new FakeAccount('DIO', 20)
fakeAccount.deposit(10)
console.log(fakeAccount)