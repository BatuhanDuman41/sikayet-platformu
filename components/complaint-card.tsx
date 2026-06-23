type ComplaintCardProps = {
  no: string;
  title: string;
  company: string;
  category: string;
  city: string;
  status: string;
  statusColor: string;
  views: string;
  date: string;
};

export function ComplaintCard(props: ComplaintCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
        <span>{props.no}</span>
        <span>·</span>
        <span>{props.category}</span>
        <span>·</span>
        <span>{props.city}</span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-950">{props.title}</h3>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">{props.company}</span> · {props.date}
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
            <span className={`status-dot ${props.statusColor}`} />
            {props.status}
          </span>
          <span className="text-slate-500">{props.views} görüntülenme</span>
        </div>
      </div>
    </article>
  );
}
