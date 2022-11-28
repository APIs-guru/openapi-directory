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
var GetChannelSubscriptionsPathParams = /** @class */ (function (_super) {
    __extends(GetChannelSubscriptionsPathParams, _super);
    function GetChannelSubscriptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetChannelSubscriptionsPathParams.prototype, "userId", void 0);
    return GetChannelSubscriptionsPathParams;
}(SpeakeasyBase));
export { GetChannelSubscriptionsPathParams };
export var GetChannelSubscriptionsDirectionEnum;
(function (GetChannelSubscriptionsDirectionEnum) {
    GetChannelSubscriptionsDirectionEnum["Asc"] = "asc";
    GetChannelSubscriptionsDirectionEnum["Desc"] = "desc";
})(GetChannelSubscriptionsDirectionEnum || (GetChannelSubscriptionsDirectionEnum = {}));
export var GetChannelSubscriptionsFilterEnum;
(function (GetChannelSubscriptionsFilterEnum) {
    GetChannelSubscriptionsFilterEnum["Moderated"] = "moderated";
})(GetChannelSubscriptionsFilterEnum || (GetChannelSubscriptionsFilterEnum = {}));
export var GetChannelSubscriptionsSortEnum;
(function (GetChannelSubscriptionsSortEnum) {
    GetChannelSubscriptionsSortEnum["Alphabetical"] = "alphabetical";
    GetChannelSubscriptionsSortEnum["Date"] = "date";
    GetChannelSubscriptionsSortEnum["Followers"] = "followers";
    GetChannelSubscriptionsSortEnum["Videos"] = "videos";
})(GetChannelSubscriptionsSortEnum || (GetChannelSubscriptionsSortEnum = {}));
var GetChannelSubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetChannelSubscriptionsQueryParams, _super);
    function GetChannelSubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetChannelSubscriptionsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetChannelSubscriptionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetChannelSubscriptionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetChannelSubscriptionsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetChannelSubscriptionsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetChannelSubscriptionsQueryParams.prototype, "sort", void 0);
    return GetChannelSubscriptionsQueryParams;
}(SpeakeasyBase));
export { GetChannelSubscriptionsQueryParams };
var GetChannelSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(GetChannelSubscriptionsRequest, _super);
    function GetChannelSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChannelSubscriptionsPathParams)
    ], GetChannelSubscriptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChannelSubscriptionsQueryParams)
    ], GetChannelSubscriptionsRequest.prototype, "queryParams", void 0);
    return GetChannelSubscriptionsRequest;
}(SpeakeasyBase));
export { GetChannelSubscriptionsRequest };
var GetChannelSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(GetChannelSubscriptionsResponse, _super);
    function GetChannelSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChannelSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChannelSubscriptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Channel }),
        __metadata("design:type", Array)
    ], GetChannelSubscriptionsResponse.prototype, "channels", void 0);
    return GetChannelSubscriptionsResponse;
}(SpeakeasyBase));
export { GetChannelSubscriptionsResponse };
