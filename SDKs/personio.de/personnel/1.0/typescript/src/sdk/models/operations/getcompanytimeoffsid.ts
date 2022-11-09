import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCompanyTimeOffsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCompanyTimeOffsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCompanyTimeOffsIdPathParams;
}


export class GetCompanyTimeOffsIdResponse extends SpeakeasyBase {
  @Metadata()
  absencePeriodResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
