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
var PutCisLineTypeTagPathParams = /** @class */ (function (_super) {
    __extends(PutCisLineTypeTagPathParams, _super);
    function PutCisLineTypeTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CisLineTypeId" }),
        __metadata("design:type", String)
    ], PutCisLineTypeTagPathParams.prototype, "cisLineTypeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutCisLineTypeTagPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], PutCisLineTypeTagPathParams.prototype, "tagId", void 0);
    return PutCisLineTypeTagPathParams;
}(SpeakeasyBase));
export { PutCisLineTypeTagPathParams };
var PutCisLineTypeTagHeaders = /** @class */ (function (_super) {
    __extends(PutCisLineTypeTagHeaders, _super);
    function PutCisLineTypeTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutCisLineTypeTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutCisLineTypeTagHeaders.prototype, "authorization", void 0);
    return PutCisLineTypeTagHeaders;
}(SpeakeasyBase));
export { PutCisLineTypeTagHeaders };
var PutCisLineTypeTagRequest = /** @class */ (function (_super) {
    __extends(PutCisLineTypeTagRequest, _super);
    function PutCisLineTypeTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutCisLineTypeTagPathParams)
    ], PutCisLineTypeTagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutCisLineTypeTagHeaders)
    ], PutCisLineTypeTagRequest.prototype, "headers", void 0);
    return PutCisLineTypeTagRequest;
}(SpeakeasyBase));
export { PutCisLineTypeTagRequest };
var PutCisLineTypeTagResponse = /** @class */ (function (_super) {
    __extends(PutCisLineTypeTagResponse, _super);
    function PutCisLineTypeTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutCisLineTypeTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutCisLineTypeTagResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutCisLineTypeTagResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Tag)
    ], PutCisLineTypeTagResponse.prototype, "tag", void 0);
    return PutCisLineTypeTagResponse;
}(SpeakeasyBase));
export { PutCisLineTypeTagResponse };
