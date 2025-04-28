import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function HezmartBreadcrumb({href, text}) {
  return (
    <Breadcrumb className="flex gap-4 items-center text-sm mt-5 items-center">
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className="flex items-center space-x-2">
          <span>Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href={`/${href}`}>{text}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href={`/${href}/register`} className="font-semibold">
          Register
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
