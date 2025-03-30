import { ethers, upgrades } from "hardhat";

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x0C81354A7cbEadB34A467E7122288972Ae4d86b3";

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + upgraded.owner());
  console.log("Implementation contract address: " + implementationAddress);
}

main();
