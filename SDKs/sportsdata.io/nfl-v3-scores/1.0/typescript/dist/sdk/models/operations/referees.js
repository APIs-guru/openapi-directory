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
export var RefereesFormatEnum;
(function (RefereesFormatEnum) {
    RefereesFormatEnum["Xml"] = "XML";
    RefereesFormatEnum["Json"] = "JSON";
})(RefereesFormatEnum || (RefereesFormatEnum = {}));
var RefereesPathParams = /** @class */ (function (_super) {
    __extends(RefereesPathParams, _super);
    function RefereesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], RefereesPathParams.prototype, "format", void 0);
    return RefereesPathParams;
}(SpeakeasyBase));
export { RefereesPathParams };
var RefereesRequest = /** @class */ (function (_super) {
    __extends(RefereesRequest, _super);
    function RefereesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RefereesPathParams)
    ], RefereesRequest.prototype, "pathParams", void 0);
    return RefereesRequest;
}(SpeakeasyBase));
export { RefereesRequest };
var RefereesResponse = /** @class */ (function (_super) {
    __extends(RefereesResponse, _super);
    function RefereesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RefereesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], RefereesResponse.prototype, "referees", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RefereesResponse.prototype, "statusCode", void 0);
    return RefereesResponse;
}(SpeakeasyBase));
export { RefereesResponse };
