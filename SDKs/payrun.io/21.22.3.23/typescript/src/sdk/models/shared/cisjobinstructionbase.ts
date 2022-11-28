import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CisJobInstructionBaseCisJobInstructionBaseEmployer
/** 
 * The cis job instruction bases' employer
**/
export class CisJobInstructionBaseCisJobInstructionBaseEmployer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


// CisJobInstructionBaseCisJobInstructionBaseSubContractor
/** 
 * The cis job instruction bases' sub contractors
**/
export class CisJobInstructionBaseCisJobInstructionBaseSubContractor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubContractor" })
  subContractor?: any[];
}


export class CisJobInstructionBaseCisJobInstructionBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Employer" })
  employer?: CisJobInstructionBaseCisJobInstructionBaseEmployer;

  @SpeakeasyMetadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SubContractors" })
  subContractors?: CisJobInstructionBaseCisJobInstructionBaseSubContractor;
}


export class CisJobInstructionBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CisJobInstructionBase" })
  cisJobInstructionBase?: CisJobInstructionBaseCisJobInstructionBase;
}
