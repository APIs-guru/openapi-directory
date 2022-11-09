import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageClassificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=modelId, multipart_form, name=modelId" })
  modelId: string;

  @Metadata({ data: "json, name=numResults, multipart_form, name=numResults" })
  numResults?: number;

  @Metadata({ data: "json, name=sampleBase64Content, multipart_form, name=sampleBase64Content" })
  sampleBase64Content?: string;

  @Metadata({ data: "json, name=sampleId, multipart_form, name=sampleId" })
  sampleId?: string;

  @Metadata({ data: "json, name=sampleLocation, multipart_form, name=sampleLocation" })
  sampleLocation?: string;
}
