import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindUserByUsernamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class FindUserByUsernameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=expansions" })
  expansions?: shared.UserExpansionsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=media.fields" })
  mediaFields?: shared.MediaFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=place.fields" })
  placeFields?: shared.PlaceFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=poll.fields" })
  pollFields?: shared.PollFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tweet.fields" })
  tweetFields?: shared.TweetFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=user.fields" })
  userFields?: shared.UserFieldsParameterEnum[];
}


export class FindUserByUsernameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindUserByUsernamePathParams;

  @SpeakeasyMetadata()
  queryParams: FindUserByUsernameQueryParams;
}


export class FindUserByUsernameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  problem?: any;

  @SpeakeasyMetadata()
  singleUserLookupResponse?: shared.SingleUserLookupResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
