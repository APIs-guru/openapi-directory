import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChartEntityResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @Metadata({ data: "json, name=changed_on" })
  changedOn?: string;

  @Metadata({ data: "json, name=datasource" })
  datasource?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=description_markeddown" })
  descriptionMarkeddown?: string;

  @Metadata({ data: "json, name=form_data" })
  formData?: Map<string, any>;

  @Metadata({ data: "json, name=modified" })
  modified?: string;

  @Metadata({ data: "json, name=slice_id" })
  sliceId?: number;

  @Metadata({ data: "json, name=slice_name" })
  sliceName?: string;

  @Metadata({ data: "json, name=slice_url" })
  sliceUrl?: string;
}
