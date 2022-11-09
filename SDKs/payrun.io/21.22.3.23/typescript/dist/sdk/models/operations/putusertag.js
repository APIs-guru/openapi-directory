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
var PutUserTagPathParams = /** @class */ (function (_super) {
    __extends(PutUserTagPathParams, _super);
    function PutUserTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], PutUserTagPathParams.prototype, "tagId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=UserId" }),
        __metadata("design:type", String)
    ], PutUserTagPathParams.prototype, "userId", void 0);
    return PutUserTagPathParams;
}(SpeakeasyBase));
export { PutUserTagPathParams };
var PutUserTagHeaders = /** @class */ (function (_super) {
    __extends(PutUserTagHeaders, _super);
    function PutUserTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutUserTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutUserTagHeaders.prototype, "authorization", void 0);
    return PutUserTagHeaders;
}(SpeakeasyBase));
export { PutUserTagHeaders };
var PutUserTagRequest = /** @class */ (function (_super) {
    __extends(PutUserTagRequest, _super);
    function PutUserTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutUserTagPathParams)
    ], PutUserTagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutUserTagHeaders)
    ], PutUserTagRequest.prototype, "headers", void 0);
    return PutUserTagRequest;
}(SpeakeasyBase));
export { PutUserTagRequest };
var PutUserTagResponse = /** @class */ (function (_super) {
    __extends(PutUserTagResponse, _super);
    function PutUserTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutUserTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutUserTagResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutUserTagResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Tag)
    ], PutUserTagResponse.prototype, "tag", void 0);
    return PutUserTagResponse;
}(SpeakeasyBase));
export { PutUserTagResponse };
