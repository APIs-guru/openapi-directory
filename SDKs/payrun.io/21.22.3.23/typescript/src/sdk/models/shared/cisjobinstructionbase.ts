import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CisJobInstructionBaseCisJobInstructionBaseEmployer
/** 
 * The cis job instruction bases' employer
**/
export class CisJobInstructionBaseCisJobInstructionBaseEmployer extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


// CisJobInstructionBaseCisJobInstructionBaseSubContractor
/** 
 * The cis job instruction bases' sub contractors
**/
export class CisJobInstructionBaseCisJobInstructionBaseSubContractor extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubContractor" })
  subContractor?: any[];
}


export class CisJobInstructionBaseCisJobInstructionBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=Employer" })
  employer?: CisJobInstructionBaseCisJobInstructionBaseEmployer;

  @Metadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @Metadata({ data: "json, name=SubContractors" })
  subContractors?: CisJobInstructionBaseCisJobInstructionBaseSubContractor;
}


export class CisJobInstructionBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=CisJobInstructionBase" })
  cisJobInstructionBase?: CisJobInstructionBaseCisJobInstructionBase;
}
