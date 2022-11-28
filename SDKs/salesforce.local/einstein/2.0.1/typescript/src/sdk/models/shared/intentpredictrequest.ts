import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IntentPredictRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document, multipart_form, name=document" })
  document: string;

  @SpeakeasyMetadata({ data: "json, name=modelId, multipart_form, name=modelId" })
  modelId: string;

  @SpeakeasyMetadata({ data: "json, name=numResults, multipart_form, name=numResults" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=sampleId, multipart_form, name=sampleId" })
  sampleId?: string;
}
