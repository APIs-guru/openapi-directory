import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSourceAccountsV2QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fundingAccountId" })
  fundingAccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=physicalAccountId" })
  physicalAccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=physicalAccountName" })
  physicalAccountName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetSourceAccountsV2Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSourceAccountsV2QueryParams;
}


export class GetSourceAccountsV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSourceAccountResponseV2?: shared.ListSourceAccountResponseV2;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
