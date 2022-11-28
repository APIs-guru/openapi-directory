import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IngestionResultStatusEnum {
    Error = "Error",
    SuccessWarning = "SuccessWarning",
    Success = "Success"
}


// IngestionResult
/** 
 * This class defines the IngestionResult on the Publish API
**/
export class IngestionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  ignoredProperties?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  invalidProperties?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  invalidValues?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  missingProperties?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  status: IngestionResultStatusEnum;

  @SpeakeasyMetadata()
  unknownProperties?: Map<string, Map<string, any>>;
}
