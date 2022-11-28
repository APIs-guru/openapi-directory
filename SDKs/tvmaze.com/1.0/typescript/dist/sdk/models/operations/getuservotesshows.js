var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var GetUserVotesShowsEmbedEnum;
(function (GetUserVotesShowsEmbedEnum) {
    GetUserVotesShowsEmbedEnum["Show"] = "show";
})(GetUserVotesShowsEmbedEnum || (GetUserVotesShowsEmbedEnum = {}));
var GetUserVotesShowsQueryParams = /** @class */ (function (_super) {
    __extends(GetUserVotesShowsQueryParams, _super);
    function GetUserVotesShowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", String)
    ], GetUserVotesShowsQueryParams.prototype, "embed", void 0);
    return GetUserVotesShowsQueryParams;
}(SpeakeasyBase));
export { GetUserVotesShowsQueryParams };
var GetUserVotesShowsRequest = /** @class */ (function (_super) {
    __extends(GetUserVotesShowsRequest, _super);
    function GetUserVotesShowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserVotesShowsQueryParams)
    ], GetUserVotesShowsRequest.prototype, "queryParams", void 0);
    return GetUserVotesShowsRequest;
}(SpeakeasyBase));
export { GetUserVotesShowsRequest };
var GetUserVotesShowsResponse = /** @class */ (function (_super) {
    __extends(GetUserVotesShowsResponse, _super);
    function GetUserVotesShowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserVotesShowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ShowVote }),
        __metadata("design:type", Array)
    ], GetUserVotesShowsResponse.prototype, "showVotes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserVotesShowsResponse.prototype, "statusCode", void 0);
    return GetUserVotesShowsResponse;
}(SpeakeasyBase));
export { GetUserVotesShowsResponse };
