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
var GetAsyncEventQueryParams = /** @class */ (function (_super) {
    __extends(GetAsyncEventQueryParams, _super);
    function GetAsyncEventQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_id" }),
        __metadata("design:type", String)
    ], GetAsyncEventQueryParams.prototype, "lastId", void 0);
    return GetAsyncEventQueryParams;
}(SpeakeasyBase));
export { GetAsyncEventQueryParams };
var GetAsyncEventSecurity = /** @class */ (function (_super) {
    __extends(GetAsyncEventSecurity, _super);
    function GetAsyncEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetAsyncEventSecurity.prototype, "jwt", void 0);
    return GetAsyncEventSecurity;
}(SpeakeasyBase));
export { GetAsyncEventSecurity };
var GetAsyncEvent200ApplicationJsonResult = /** @class */ (function (_super) {
    __extends(GetAsyncEvent200ApplicationJsonResult, _super);
    function GetAsyncEvent200ApplicationJsonResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel_id" }),
        __metadata("design:type", String)
    ], GetAsyncEvent200ApplicationJsonResult.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], GetAsyncEvent200ApplicationJsonResult.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAsyncEvent200ApplicationJsonResult.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=job_id" }),
        __metadata("design:type", String)
    ], GetAsyncEvent200ApplicationJsonResult.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result_url" }),
        __metadata("design:type", String)
    ], GetAsyncEvent200ApplicationJsonResult.prototype, "resultUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAsyncEvent200ApplicationJsonResult.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetAsyncEvent200ApplicationJsonResult.prototype, "userId", void 0);
    return GetAsyncEvent200ApplicationJsonResult;
}(SpeakeasyBase));
export { GetAsyncEvent200ApplicationJsonResult };
var GetAsyncEvent200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAsyncEvent200ApplicationJson, _super);
    function GetAsyncEvent200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: GetAsyncEvent200ApplicationJsonResult }),
        __metadata("design:type", Array)
    ], GetAsyncEvent200ApplicationJson.prototype, "result", void 0);
    return GetAsyncEvent200ApplicationJson;
}(SpeakeasyBase));
export { GetAsyncEvent200ApplicationJson };
var GetAsyncEvent401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAsyncEvent401ApplicationJson, _super);
    function GetAsyncEvent401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAsyncEvent401ApplicationJson.prototype, "message", void 0);
    return GetAsyncEvent401ApplicationJson;
}(SpeakeasyBase));
export { GetAsyncEvent401ApplicationJson };
var GetAsyncEvent500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAsyncEvent500ApplicationJson, _super);
    function GetAsyncEvent500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAsyncEvent500ApplicationJson.prototype, "message", void 0);
    return GetAsyncEvent500ApplicationJson;
}(SpeakeasyBase));
export { GetAsyncEvent500ApplicationJson };
var GetAsyncEventRequest = /** @class */ (function (_super) {
    __extends(GetAsyncEventRequest, _super);
    function GetAsyncEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAsyncEventQueryParams)
    ], GetAsyncEventRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAsyncEventSecurity)
    ], GetAsyncEventRequest.prototype, "security", void 0);
    return GetAsyncEventRequest;
}(SpeakeasyBase));
export { GetAsyncEventRequest };
var GetAsyncEventResponse = /** @class */ (function (_super) {
    __extends(GetAsyncEventResponse, _super);
    function GetAsyncEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAsyncEventResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAsyncEvent200ApplicationJson)
    ], GetAsyncEventResponse.prototype, "getAsyncEvent200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAsyncEvent401ApplicationJson)
    ], GetAsyncEventResponse.prototype, "getAsyncEvent401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAsyncEvent500ApplicationJson)
    ], GetAsyncEventResponse.prototype, "getAsyncEvent500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAsyncEventResponse.prototype, "statusCode", void 0);
    return GetAsyncEventResponse;
}(SpeakeasyBase));
export { GetAsyncEventResponse };
