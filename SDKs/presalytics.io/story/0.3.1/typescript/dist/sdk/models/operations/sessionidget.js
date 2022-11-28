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
var SessionIdGetPathParams = /** @class */ (function (_super) {
    __extends(SessionIdGetPathParams, _super);
    function SessionIdGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session_id" }),
        __metadata("design:type", String)
    ], SessionIdGetPathParams.prototype, "sessionId", void 0);
    return SessionIdGetPathParams;
}(SpeakeasyBase));
export { SessionIdGetPathParams };
var SessionIdGetQueryParams = /** @class */ (function (_super) {
    __extends(SessionIdGetQueryParams, _super);
    function SessionIdGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_relationships" }),
        __metadata("design:type", Boolean)
    ], SessionIdGetQueryParams.prototype, "includeRelationships", void 0);
    return SessionIdGetQueryParams;
}(SpeakeasyBase));
export { SessionIdGetQueryParams };
var SessionIdGetRequest = /** @class */ (function (_super) {
    __extends(SessionIdGetRequest, _super);
    function SessionIdGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SessionIdGetPathParams)
    ], SessionIdGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SessionIdGetQueryParams)
    ], SessionIdGetRequest.prototype, "queryParams", void 0);
    return SessionIdGetRequest;
}(SpeakeasyBase));
export { SessionIdGetRequest };
var SessionIdGetResponse = /** @class */ (function (_super) {
    __extends(SessionIdGetResponse, _super);
    function SessionIdGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SessionIdGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SessionIdGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SessionIdGetResponse.prototype, "problemDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Session)
    ], SessionIdGetResponse.prototype, "session", void 0);
    return SessionIdGetResponse;
}(SpeakeasyBase));
export { SessionIdGetResponse };
