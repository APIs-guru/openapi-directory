import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V2LanguageTrainParams
/** 
 * JSON that contains parameters that specify how the model is created
**/
export class V2LanguageTrainParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=trainSplitRatio" })
  trainSplitRatio?: number;

  @Metadata({ data: "json, name=withFeedback" })
  withFeedback?: boolean;

  @Metadata({ data: "json, name=withGlobalDatasetId" })
  withGlobalDatasetId?: number;
}
