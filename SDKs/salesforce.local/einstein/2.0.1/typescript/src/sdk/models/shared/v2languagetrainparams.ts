import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// V2LanguageTrainParams
/** 
 * JSON that contains parameters that specify how the model is created
**/
export class V2LanguageTrainParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trainSplitRatio" })
  trainSplitRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=withFeedback" })
  withFeedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=withGlobalDatasetId" })
  withGlobalDatasetId?: number;
}
