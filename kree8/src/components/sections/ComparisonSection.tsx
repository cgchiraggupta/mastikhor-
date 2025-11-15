import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CircleCheck, X } from 'lucide-react';
import { comparisonData } from '@/data/mockData';

export function ComparisonSection() {
  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CircleCheck className="w-6 h-6 text-secondary mx-auto" />
      ) : (
        <X className="w-6 h-6 text-destructive mx-auto" />
      );
    }
    return value;
  };

  return (
    <section id="comparision" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4">Why choose us?</h2>
          <p className="body-lg text-muted-foreground">
            Check out what Kree8 offers Vs employees and other agencies. It's quite a
            lot!
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4"></TableHead>
                <TableHead className="text-center bg-secondary/10">kree8</TableHead>
                <TableHead className="text-center">full-time Designer</TableHead>
                <TableHead className="text-center">Other agencies</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-semibold">{row.feature}</TableCell>
                  <TableCell className="text-center bg-secondary/5">
                    {renderCell(row.kree8)}
                  </TableCell>
                  <TableCell className="text-center">
                    {renderCell(row.fullTimeDesigner)}
                  </TableCell>
                  <TableCell className="text-center">
                    {renderCell(row.otherAgencies)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center mt-12">
          <p className="heading-md">And here comes the Sauce…</p>
        </div>
      </div>
    </section>
  );
}