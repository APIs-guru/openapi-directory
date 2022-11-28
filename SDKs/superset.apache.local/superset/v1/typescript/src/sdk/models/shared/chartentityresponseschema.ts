import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChartEntityResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=changed_on" })
  changedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=datasource" })
  datasource?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=description_markeddown" })
  descriptionMarkeddown?: string;

  @SpeakeasyMetadata({ data: "json, name=form_data" })
  formData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: string;

  @SpeakeasyMetadata({ data: "json, name=slice_id" })
  sliceId?: number;

  @SpeakeasyMetadata({ data: "json, name=slice_name" })
  sliceName?: string;

  @SpeakeasyMetadata({ data: "json, name=slice_url" })
  sliceUrl?: string;
}
