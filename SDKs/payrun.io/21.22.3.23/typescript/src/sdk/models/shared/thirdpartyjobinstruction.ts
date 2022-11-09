import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThirdPartyJobInstructionThirdPartyJobInstructionEmployer
/** 
 * The third party job instructions' employer
**/
export class ThirdPartyJobInstructionThirdPartyJobInstructionEmployer extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class ThirdPartyJobInstructionThirdPartyJobInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientIdUniqueKey" })
  clientIdUniqueKey?: string;

  @Metadata({ data: "json, name=ClientSecretUniqueKey" })
  clientSecretUniqueKey?: string;

  @Metadata({ data: "json, name=Employer" })
  employer?: ThirdPartyJobInstructionThirdPartyJobInstructionEmployer;

  @Metadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @Metadata({ data: "json, name=InstructionTypeName" })
  instructionTypeName?: string;

  @Metadata({ data: "json, name=PayScheduleUniqueKey" })
  payScheduleUniqueKey?: string;

  @Metadata({ data: "json, name=PaymentDate" })
  paymentDate?: Date;

  @Metadata({ data: "json, name=RemoteEndpoint" })
  remoteEndpoint?: string;
}


export class ThirdPartyJobInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=ThirdPartyJobInstruction" })
  thirdPartyJobInstruction?: ThirdPartyJobInstructionThirdPartyJobInstruction;
}
