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
// ReportDefinitionReportDefinitionReportQueryGroup
/**
 * The querys' groups
**/
var ReportDefinitionReportDefinitionReportQueryGroup = /** @class */ (function (_super) {
    __extends(ReportDefinitionReportDefinitionReportQueryGroup, _super);
    function ReportDefinitionReportDefinitionReportQueryGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Group" }),
        __metadata("design:type", Array)
    ], ReportDefinitionReportDefinitionReportQueryGroup.prototype, "group", void 0);
    return ReportDefinitionReportDefinitionReportQueryGroup;
}(SpeakeasyBase));
export { ReportDefinitionReportDefinitionReportQueryGroup };
// ReportDefinitionReportDefinitionReportQueryVariable
/**
 * The querys' variables
**/
var ReportDefinitionReportDefinitionReportQueryVariable = /** @class */ (function (_super) {
    __extends(ReportDefinitionReportDefinitionReportQueryVariable, _super);
    function ReportDefinitionReportDefinitionReportQueryVariable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Variable" }),
        __metadata("design:type", Array)
    ], ReportDefinitionReportDefinitionReportQueryVariable.prototype, "variable", void 0);
    return ReportDefinitionReportDefinitionReportQueryVariable;
}(SpeakeasyBase));
export { ReportDefinitionReportDefinitionReportQueryVariable };
// ReportDefinitionReportDefinitionReportQuery
/**
 * The report definitions' report query
**/
var ReportDefinitionReportDefinitionReportQuery = /** @class */ (function (_super) {
    __extends(ReportDefinitionReportDefinitionReportQuery, _super);
    function ReportDefinitionReportDefinitionReportQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ExcludeNullOrEmptyElements" }),
        __metadata("design:type", Boolean)
    ], ReportDefinitionReportDefinitionReportQuery.prototype, "excludeNullOrEmptyElements", void 0);
    __decorate([
        Metadata({ data: "json, name=Groups" }),
        __metadata("design:type", ReportDefinitionReportDefinitionReportQueryGroup)
    ], ReportDefinitionReportDefinitionReportQuery.prototype, "groups", void 0);
    __decorate([
        Metadata({ data: "json, name=RootNodeName" }),
        __metadata("design:type", String)
    ], ReportDefinitionReportDefinitionReportQuery.prototype, "rootNodeName", void 0);
    __decorate([
        Metadata({ data: "json, name=SuppressMetricAttributes" }),
        __metadata("design:type", Boolean)
    ], ReportDefinitionReportDefinitionReportQuery.prototype, "suppressMetricAttributes", void 0);
    __decorate([
        Metadata({ data: "json, name=Variables" }),
        __metadata("design:type", ReportDefinitionReportDefinitionReportQueryVariable)
    ], ReportDefinitionReportDefinitionReportQuery.prototype, "variables", void 0);
    return ReportDefinitionReportDefinitionReportQuery;
}(SpeakeasyBase));
export { ReportDefinitionReportDefinitionReportQuery };
var ReportDefinitionReportDefinition = /** @class */ (function (_super) {
    __extends(ReportDefinitionReportDefinition, _super);
    function ReportDefinitionReportDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Active" }),
        __metadata("design:type", Boolean)
    ], ReportDefinitionReportDefinition.prototype, "active", void 0);
    __decorate([
        Metadata({ data: "json, name=Readonly" }),
        __metadata("design:type", Boolean)
    ], ReportDefinitionReportDefinition.prototype, "readonly", void 0);
    __decorate([
        Metadata({ data: "json, name=ReportQuery" }),
        __metadata("design:type", ReportDefinitionReportDefinitionReportQuery)
    ], ReportDefinitionReportDefinition.prototype, "reportQuery", void 0);
    __decorate([
        Metadata({ data: "json, name=SupportedTransforms" }),
        __metadata("design:type", String)
    ], ReportDefinitionReportDefinition.prototype, "supportedTransforms", void 0);
    __decorate([
        Metadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], ReportDefinitionReportDefinition.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], ReportDefinitionReportDefinition.prototype, "version", void 0);
    return ReportDefinitionReportDefinition;
}(SpeakeasyBase));
export { ReportDefinitionReportDefinition };
var ReportDefinition = /** @class */ (function (_super) {
    __extends(ReportDefinition, _super);
    function ReportDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ReportDefinition" }),
        __metadata("design:type", ReportDefinitionReportDefinition)
    ], ReportDefinition.prototype, "reportDefinition", void 0);
    return ReportDefinition;
}(SpeakeasyBase));
export { ReportDefinition };
