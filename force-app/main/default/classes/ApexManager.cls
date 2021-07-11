public with sharing class ApexManager {
    @AuraEnabled(cacheable= true)
    
    public static list<Account> getAccounts(){
        return [select id,name,email,phone,website from account limit 10];
}
}