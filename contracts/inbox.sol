pragma solidity ^0.4.18;

contract inbox{
    string message;

    function inbox(string initalMessage) public {
        message = initalMessage;
    }

    function setMessage(string _message) public {
        message = _message;
    }

    function getMessage() public view returns(string){
        return(message);
    }
}

// launching this contrat in test rinkbey network...
// start with lottery project ... we have to complete by our upcoming
// upcoming two more more webinar complete it

//meta mask ... inistalling and other things of sunday ...
// testrpc ... one package installed ...

//
// web3 is asking git ... manish
