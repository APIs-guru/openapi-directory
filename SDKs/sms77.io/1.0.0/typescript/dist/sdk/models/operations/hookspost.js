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
export var HooksPostActionEnum;
(function (HooksPostActionEnum) {
    HooksPostActionEnum["Subscribe"] = "subscribe";
    HooksPostActionEnum["Unsubscribe"] = "unsubscribe";
})(HooksPostActionEnum || (HooksPostActionEnum = {}));
export var HooksPostEventTypeEnum;
(function (HooksPostEventTypeEnum) {
    HooksPostEventTypeEnum["All"] = "all";
    HooksPostEventTypeEnum["SmsMo"] = "sms_mo";
    HooksPostEventTypeEnum["Dlr"] = "dlr";
    HooksPostEventTypeEnum["VoiceStatus"] = "voice_status";
})(HooksPostEventTypeEnum || (HooksPostEventTypeEnum = {}));
export var HooksPostRequestMethodEnum;
(function (HooksPostRequestMethodEnum) {
    HooksPostRequestMethodEnum["Post"] = "POST";
    HooksPostRequestMethodEnum["Json"] = "JSON";
    HooksPostRequestMethodEnum["Get"] = "GET";
})(HooksPostRequestMethodEnum || (HooksPostRequestMethodEnum = {}));
var HooksPostQueryParams = /** @class */ (function (_super) {
    __extends(HooksPostQueryParams, _super);
    function HooksPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], HooksPostQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_type" }),
        __metadata("design:type", String)
    ], HooksPostQueryParams.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Number)
    ], HooksPostQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request_method" }),
        __metadata("design:type", String)
    ], HooksPostQueryParams.prototype, "requestMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_url" }),
        __metadata("design:type", String)
    ], HooksPostQueryParams.prototype, "targetUrl", void 0);
    return HooksPostQueryParams;
}(SpeakeasyBase));
export { HooksPostQueryParams };
var HooksPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(HooksPost200ApplicationJson, _super);
    function HooksPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], HooksPost200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], HooksPost200ApplicationJson.prototype, "success", void 0);
    return HooksPost200ApplicationJson;
}(SpeakeasyBase));
export { HooksPost200ApplicationJson };
var HooksPostRequest = /** @class */ (function (_super) {
    __extends(HooksPostRequest, _super);
    function HooksPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HooksPostQueryParams)
    ], HooksPostRequest.prototype, "queryParams", void 0);
    return HooksPostRequest;
}(SpeakeasyBase));
export { HooksPostRequest };
var HooksPostResponse = /** @class */ (function (_super) {
    __extends(HooksPostResponse, _super);
    function HooksPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HooksPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HooksPost200ApplicationJson)
    ], HooksPostResponse.prototype, "hooksPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HooksPostResponse.prototype, "statusCode", void 0);
    return HooksPostResponse;
}(SpeakeasyBase));
export { HooksPostResponse };
