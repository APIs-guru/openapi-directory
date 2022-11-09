import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppliedInventoriesTagsForServiceOfferingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AppliedInventoriesTagsForServiceOfferingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppliedInventoriesTagsForServiceOfferingPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AppliedInventoriesParametersServicePlan;
}


export class AppliedInventoriesTagsForServiceOfferingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Tag })
  tags?: shared.Tag[];
}
