import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCompanyTimeOffsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCompanyTimeOffsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanyTimeOffsIdPathParams;
}


export class GetCompanyTimeOffsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  absencePeriodResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
