import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageClassificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modelId, multipart_form, name=modelId" })
  modelId: string;

  @SpeakeasyMetadata({ data: "json, name=numResults, multipart_form, name=numResults" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=sampleBase64Content, multipart_form, name=sampleBase64Content" })
  sampleBase64Content?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleId, multipart_form, name=sampleId" })
  sampleId?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleLocation, multipart_form, name=sampleLocation" })
  sampleLocation?: string;
}
