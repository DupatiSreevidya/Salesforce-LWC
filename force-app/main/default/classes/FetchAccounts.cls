public with sharing class FetchAccounts {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(integer numberofRecords){
       return [select id,Name,Phone from Account limit:numberofRecords];
   }
   
}
