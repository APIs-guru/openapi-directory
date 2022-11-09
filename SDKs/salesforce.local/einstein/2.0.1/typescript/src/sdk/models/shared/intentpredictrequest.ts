import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IntentPredictRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=document, multipart_form, name=document" })
  document: string;

  @Metadata({ data: "json, name=modelId, multipart_form, name=modelId" })
  modelId: string;

  @Metadata({ data: "json, name=numResults, multipart_form, name=numResults" })
  numResults?: number;

  @Metadata({ data: "json, name=sampleId, multipart_form, name=sampleId" })
  sampleId?: string;
}
