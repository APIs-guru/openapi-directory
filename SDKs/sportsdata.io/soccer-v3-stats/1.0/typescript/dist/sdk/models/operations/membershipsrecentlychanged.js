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
export var MembershipsRecentlyChangedFormatEnum;
(function (MembershipsRecentlyChangedFormatEnum) {
    MembershipsRecentlyChangedFormatEnum["Xml"] = "xml";
    MembershipsRecentlyChangedFormatEnum["Json"] = "json";
})(MembershipsRecentlyChangedFormatEnum || (MembershipsRecentlyChangedFormatEnum = {}));
var MembershipsRecentlyChangedPathParams = /** @class */ (function (_super) {
    __extends(MembershipsRecentlyChangedPathParams, _super);
    function MembershipsRecentlyChangedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=days" }),
        __metadata("design:type", String)
    ], MembershipsRecentlyChangedPathParams.prototype, "days", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], MembershipsRecentlyChangedPathParams.prototype, "format", void 0);
    return MembershipsRecentlyChangedPathParams;
}(SpeakeasyBase));
export { MembershipsRecentlyChangedPathParams };
var MembershipsRecentlyChangedRequest = /** @class */ (function (_super) {
    __extends(MembershipsRecentlyChangedRequest, _super);
    function MembershipsRecentlyChangedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MembershipsRecentlyChangedPathParams)
    ], MembershipsRecentlyChangedRequest.prototype, "pathParams", void 0);
    return MembershipsRecentlyChangedRequest;
}(SpeakeasyBase));
export { MembershipsRecentlyChangedRequest };
var MembershipsRecentlyChangedResponse = /** @class */ (function (_super) {
    __extends(MembershipsRecentlyChangedResponse, _super);
    function MembershipsRecentlyChangedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MembershipsRecentlyChangedResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], MembershipsRecentlyChangedResponse.prototype, "memberships", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MembershipsRecentlyChangedResponse.prototype, "statusCode", void 0);
    return MembershipsRecentlyChangedResponse;
}(SpeakeasyBase));
export { MembershipsRecentlyChangedResponse };
