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
var QueryBatchStatusV4PathParams = /** @class */ (function (_super) {
    __extends(QueryBatchStatusV4PathParams, _super);
    function QueryBatchStatusV4PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchId" }),
        __metadata("design:type", String)
    ], QueryBatchStatusV4PathParams.prototype, "batchId", void 0);
    return QueryBatchStatusV4PathParams;
}(SpeakeasyBase));
export { QueryBatchStatusV4PathParams };
var QueryBatchStatusV4Request = /** @class */ (function (_super) {
    __extends(QueryBatchStatusV4Request, _super);
    function QueryBatchStatusV4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QueryBatchStatusV4PathParams)
    ], QueryBatchStatusV4Request.prototype, "pathParams", void 0);
    return QueryBatchStatusV4Request;
}(SpeakeasyBase));
export { QueryBatchStatusV4Request };
var QueryBatchStatusV4Response = /** @class */ (function (_super) {
    __extends(QueryBatchStatusV4Response, _super);
    function QueryBatchStatusV4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QueryBatchStatusV4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.QueryBatchResponse2)
    ], QueryBatchStatusV4Response.prototype, "queryBatchResponse2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QueryBatchStatusV4Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], QueryBatchStatusV4Response.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], QueryBatchStatusV4Response.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], QueryBatchStatusV4Response.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], QueryBatchStatusV4Response.prototype, "inlineResponse404", void 0);
    return QueryBatchStatusV4Response;
}(SpeakeasyBase));
export { QueryBatchStatusV4Response };
