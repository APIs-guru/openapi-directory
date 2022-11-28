import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThirdPartyJobInstructionThirdPartyJobInstructionEmployer
/** 
 * The third party job instructions' employer
**/
export class ThirdPartyJobInstructionThirdPartyJobInstructionEmployer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class ThirdPartyJobInstructionThirdPartyJobInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientIdUniqueKey" })
  clientIdUniqueKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientSecretUniqueKey" })
  clientSecretUniqueKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Employer" })
  employer?: ThirdPartyJobInstructionThirdPartyJobInstructionEmployer;

  @SpeakeasyMetadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=InstructionTypeName" })
  instructionTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=PayScheduleUniqueKey" })
  payScheduleUniqueKey?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=RemoteEndpoint" })
  remoteEndpoint?: string;
}


export class ThirdPartyJobInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ThirdPartyJobInstruction" })
  thirdPartyJobInstruction?: ThirdPartyJobInstructionThirdPartyJobInstruction;
}
