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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var SessionsIdViewsPostPathParams = /** @class */ (function (_super) {
    __extends(SessionsIdViewsPostPathParams, _super);
    function SessionsIdViewsPostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=session_id" }),
        __metadata("design:type", String)
    ], SessionsIdViewsPostPathParams.prototype, "sessionId", void 0);
    return SessionsIdViewsPostPathParams;
}(SpeakeasyBase));
export { SessionsIdViewsPostPathParams };
// SessionsIdViewsPostRequiredParametersToCreateAView
/**
 * A page view required a page number from the story outline to be created
**/
var SessionsIdViewsPostRequiredParametersToCreateAView = /** @class */ (function (_super) {
    __extends(SessionsIdViewsPostRequiredParametersToCreateAView, _super);
    function SessionsIdViewsPostRequiredParametersToCreateAView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=activeMSecs" }),
        __metadata("design:type", Number)
    ], SessionsIdViewsPostRequiredParametersToCreateAView.prototype, "activeMSecs", void 0);
    __decorate([
        Metadata({ data: "json, name=additional" }),
        __metadata("design:type", String)
    ], SessionsIdViewsPostRequiredParametersToCreateAView.prototype, "additional", void 0);
    __decorate([
        Metadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], SessionsIdViewsPostRequiredParametersToCreateAView.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=pageNumber" }),
        __metadata("design:type", Number)
    ], SessionsIdViewsPostRequiredParametersToCreateAView.prototype, "pageNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], SessionsIdViewsPostRequiredParametersToCreateAView.prototype, "startTime", void 0);
    return SessionsIdViewsPostRequiredParametersToCreateAView;
}(SpeakeasyBase));
export { SessionsIdViewsPostRequiredParametersToCreateAView };
var SessionsIdViewsPostRequest = /** @class */ (function (_super) {
    __extends(SessionsIdViewsPostRequest, _super);
    function SessionsIdViewsPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SessionsIdViewsPostPathParams)
    ], SessionsIdViewsPostRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SessionsIdViewsPostRequiredParametersToCreateAView)
    ], SessionsIdViewsPostRequest.prototype, "request", void 0);
    return SessionsIdViewsPostRequest;
}(SpeakeasyBase));
export { SessionsIdViewsPostRequest };
var SessionsIdViewsPostResponse = /** @class */ (function (_super) {
    __extends(SessionsIdViewsPostResponse, _super);
    function SessionsIdViewsPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SessionsIdViewsPostResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SessionsIdViewsPostResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SessionsIdViewsPostResponse.prototype, "problemDetail", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.View)
    ], SessionsIdViewsPostResponse.prototype, "view", void 0);
    return SessionsIdViewsPostResponse;
}(SpeakeasyBase));
export { SessionsIdViewsPostResponse };
