var currentAddress = '';

var addressNames = {}

function htmlWelcomeMessage(){
  if(addressNames[currentAddress])
    return `Hello, you are currently representing <i>${addressNames[currentAddress]}</i> (account code: ${currentAddress})`;
  else if(currentAddress)
    return `Hello, you are currently using an unknown account (account code: ${currentAddress}), please register a name.`;
  else
    return `Hello, you are not currently logged in with an account.`;
}

function displayTab(selection){
  console.log(`opening ${selection} menu`);
  document.getElementById('currentMenu').innerHTML = `${selection}`;
  switch(selection){
    case 'main':
      document.getElementById('display').innerHTML = `<div>${htmlWelcomeMessage()}</div><br>
      <div>menu not included in this demo</div>
      what might go here: global and personal sharing statistics, links to documentation, related news`;
      break;
    case 'account':
      document.getElementById('display').innerHTML = `<div>menu not included in this demo</div>
      what might go here: options to update your account details`;
      break;
    case 'data':
      document.getElementById('display').innerHTML = `<div>menu not included in this demo</div>
      what might go here: documents you have access to, their overall status, and links to their details`;
      break;
    case 'requests':
      document.getElementById('display').innerHTML = `<div>menu not included in this demo</div>
      what might go here: a list of pending/approved requests`;
      break;
    case 'registry':
      document.getElementById('display').innerHTML = `<div>menu not included in this demo</div>
      what might go here: a list of stewards/users ordered by relative reputation, a list of documents available for requests`;
      break;
    case 'upload':
      document.getElementById('display').innerHTML = `<div>menu not included in this demo</div>
      what might go here: options to sign agreements on a document and then upload an encrypted copy`;
      break;
  }
}

function loadDemo(){
  currentAddress = '0x01234567890ABCDEF01234567890ABCDEF01234567';
  addressNames = {
    '0x01234567890ABCDEF01234567890ABCDEF01234567': 'NCI Genome Data Commons'
  }
  document.getElementById('demoOptions').remove();
  main();
}

function main(){
  console.log('hello!');
  displayTab('main');
}

onload = main;
