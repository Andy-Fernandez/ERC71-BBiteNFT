const { ethers, run } = require("hardhat");

async function main() {
  // Despliegue del contrato
  const CuyCollectionNft = await ethers.getContractFactory("CuyCollectionNft");
  const cuyCollectionNft = await CuyCollectionNft.deploy(
    "Cuy Collection",
    "CUY"
  );

  // Espera a que el contrato sea desplegado
  await cuyCollectionNft.waitForDeployment();
  console.log("Contrato desplegado en:", cuyCollectionNft.target);

  // Espera para asegurar que el contrato esté disponible en la red
  await new Promise(resolve => setTimeout(resolve, 60000)); // Espera 60 segundos

  // Verificación del contrato
  try {
    await run("verify:verify", {
      address: cuyCollectionNft.target,
      constructorArguments: [
        "Cuy Collection",
        "CUY"
      ],
    });
    console.log("Verificación exitosa");
  } catch (error) {
    console.error("Error en la verificación:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0xfC810281e14B398679EA2ACC4eE74A042775Fb06